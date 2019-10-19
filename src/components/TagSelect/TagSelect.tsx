import React, { SFC } from "react";
import { Pills } from "components/Pills/Pills";
import { SelectContainer, SelectArea, TagInput } from "./styles";

interface Tag {
  label: string;
}

interface Props {
  placeholder: string;
  tags: Tag[];
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

export const TagSelect: SFC<Props> = props => {
  const { placeholder, tags } = props;
  console.log(tags);
  return (
    <SelectContainer className={props.className}>
      <SelectArea>
        {tags.map((tag, index) => (
          <Pills
            key={`TAG_${index}`}
            label={tag.label}
            onRemove={onRemove.bind(null, tags, index, props)}
          />
        ))}
                  
        <TagInput
          type="text"
          onKeyDown={e => handleKeydown(e, tags, props)}
          onKeyUp={e => handleKeyUp(e, tags, props)}
          onBlur={e => handleBlur(e, tags, props)}
          placeholder={placeholder}
        />
      </SelectArea>
    </SelectContainer>
  );
};
