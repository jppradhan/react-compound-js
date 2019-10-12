import React from "react";
import {
  SelectContainer,
  SelectArea,
  StyledTag,
  Placeholder,
  TagInput
} from "./styles";

interface Tag {
  label: string;
}

interface Props {
  placeholder: string;
  tags: Tag[];
  enableBackspace?: boolean;
  className?: string;
  onUpdate: (tags: Tag[]) => void;
  onRemove: (tag: Tag) => void;
  separator?: string;
}

const addTags = (
  event: React.SyntheticEvent<HTMLInputElement>,
  tags: Tag[],
  props: Props
) => {
  //@ts-ignore
  const value = event.target.value.trim();
  event.preventDefault();

  if (!value) return;

  const newTags = props.separator
    ? [
        ...tags,
        ...value
          .split(new RegExp(props.separator, "g"))
          .filter((str: string) => !!str.trim())
          .map((str: string) => ({ label: str }))
      ]
    : [...tags, { label: value }];

  props.onUpdate(newTags);
  //@ts-ignore
  event.target.value = "";
};

const handleKeydown = (
  event: React.SyntheticEvent<HTMLInputElement>,
  tags: Tag[],
  props: Props
) => {
  //@ts-ignore
  const isBackspace = event.keyCode === 8 && !event.target.value;
  //@ts-ignore
  const isEnter = event.keyCode === 13;
  if (isBackspace) {
    const tag = tags.pop();
    if (tag) {
      props.onRemove(tag);
    }
    props.onUpdate(tags);
  }
  if (isEnter) {
    addTags(event, tags, props);
  }
};

const handleKeyUp = (
  event: React.SyntheticEvent<HTMLInputElement>,
  tags: Tag[],
  props: Props
) => {
  //@ts-ignore
  const value = event.target.value.trim();
  const isSepatatorTypes = value.includes(props.separator);

  if (isSepatatorTypes) {
    addTags(event, tags, props);
  }
};

const handleBlur = (
  event: React.SyntheticEvent<HTMLInputElement>,
  tags: Tag[],
  props: Props
) => {
  addTags(event, tags, props);
};

const onRemove = (tags: Tag[], tagIndex: number, props: Props) => {
  const newTags = tags.filter((tag, index) => tagIndex !== index);
  props.onUpdate(newTags);
  props.onRemove(tags[tagIndex]);
};

export const TagSelect: React.SFC<Props> = props => {
  const { placeholder, enableBackspace, tags } = props;

  return (
    <SelectContainer className={props.className}>
      <SelectArea>
        {tags &&
          tags.map((tag, index) => (
            <StyledTag
              key={`TAG_${index}`}
              label={tag.label}
              onRemove={onRemove.bind(null, tags, index, props)}
            />
          ))}
                  
        {tags.length === 0 && !enableBackspace ? (
          <Placeholder>{placeholder}</Placeholder>
        ) : null}
        {enableBackspace && (
          <TagInput
            type="text"
            onKeyDown={e => handleKeydown(e, tags, props)}
            onKeyUp={e => handleKeyUp(e, tags, props)}
            onBlur={e => handleBlur(e, tags, props)}
            placeholder={tags.length === 0 ? placeholder : ""}
          />
        )}
      </SelectArea>
    </SelectContainer>
  );
};
