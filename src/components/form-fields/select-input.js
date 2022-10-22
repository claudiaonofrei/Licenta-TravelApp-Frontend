import React, { useRef, useEffect, useState } from "react";
import {
  InputText,
  SelectInputWrapper,
  OptionsContainer,
  Option,
  OptionName,
  OptionImage,
  FieldError,
} from "./styles";

const SelectInput = ({
  name,
  placeholder,
  options,
  error,
  onChange,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState({ id: "", name: value });
  const [showOptions, setShowOptions] = useState(false);
  const ref = useRef(null);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    setFilteredOptions(options);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onSearch = (value) => {
    const searchResults = options.filter((option) => {
      const regex = new RegExp(`${value.toLowerCase()}*`);
      if (regex.test(option.name.toLowerCase())) {
        return option;
      }
    });
    setFilteredOptions(searchResults);
  };

  return (
    <SelectInputWrapper ref={ref}>
      <InputText
        type={"text"}
        name={name}
        placeholder={placeholder}
        value={selectedOption.name}
        onFocus={() => setShowOptions(true)}
        onChange={(e) => {
          const value = e.target.value;
          if (value) {
            onSearch(value);
          } else {
            setFilteredOptions(options);
          }

          setSelectedOption({ id: "", name: value });
        }}
        error={error}
      />
      {showOptions && (
        <OptionsContainer>
          {filteredOptions.map((option, index) => (
            <Option
              key={`${option.name}${index}`}
              onClick={() => {
                setSelectedOption(option);
                setShowOptions(false);
                onChange(option.name);
              }}
              selected={option.name === selectedOption.name}
            >
              {option.image && <OptionImage src={option.image} />}
              <OptionName>{option.name}</OptionName>
            </Option>
          ))}
        </OptionsContainer>
      )}
      {!!error && <FieldError>{error}</FieldError>}
    </SelectInputWrapper>
  );
};

export default SelectInput;
