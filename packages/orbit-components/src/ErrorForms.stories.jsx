// @flow

import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import { css } from "styled-components";

import { SIZE_OPTIONS } from "./InputField/consts";
import Stack from "./Stack";
import RenderInRtl from "./utils/rtl/RenderInRtl";
import Tag from "./Tag";
import InputField from "./InputField";
import Textarea from "./Textarea";
import Select from "./Select";
import InputFile from "./InputFile";
import InputGroup from "./InputGroup";
import Button from "./Button";
import Text from "./Text";
import ChevronLeft from "./icons/ChevronLeft";
import Card from "./Card";
import CountryFlag from "./CountryFlag";
import Airplane from "./icons/Airplane";
import TextLink from "./TextLink";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Modal, { ModalHeader, ModalSection, ModalFooter } from "./Modal";

const objectOptions = [
  { value: 0, label: "Zero-th item" },
  { value: 1, label: "First item" },
  { value: 2, label: "Second item" },
  { value: 3, label: "Third item" },
];

export default {
  title: "ErrorForms Kitchensink",
};

export const Error = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Something went wrong.");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const required = boolean("required", true);

  return (
    <Stack>
      <InputField
        size={size}
        error={<TextLink tabIndex={0}>{error}</TextLink>}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        disabled
        inlineLabel
        error={<TextLink tabIndex={0}>{error}</TextLink>}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        error={error}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        error={error}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        error={error}
        inlineLabel
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        error={error}
        inlineLabel
        prefix={prefix}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        label={label}
        inlineLabel
        readOnly
        tags={
          <>
            <Tag selected onRemove={action("onRemove")}>
              Brno
            </Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
          </>
        }
        error={error}
        value={value}
        placeholder={placeholder}
      />
      <InputField
        label={label}
        value={value}
        placeholder={placeholder}
        required={required}
        error={error}
        readOnly
      />
      <Textarea label={label} placeholder={placeholder} error={error} value={value} readOnly />
      <Textarea placeholder={placeholder} error={error} value={value} readOnly />
      <Select
        label={label}
        options={objectOptions}
        value={1}
        error={error}
        onChange={action("onChange")}
      />
      <Select options={objectOptions} error={error} value={1} onChange={action("onChange")} />
      <InputFile label={label} error={error} onRemoveFile={action("removeFile")} />
      <InputFile error={error} onRemoveFile={action("removeFile")} />
      <InputGroup label={label}>
        <InputField error={error} placeholder="DD" readOnly />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" readOnly />
      </InputGroup>
      <InputGroup>
        <InputField error={error} placeholder="DD" readOnly />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" readOnly />
      </InputGroup>
    </Stack>
  );
};

Error.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const Help = (): React.Node => {
  const label = text("Label", "Label");
  const help = text("Help", "Is the spelling correct?");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const required = boolean("required", true);
  const helpClosable = boolean("helpClosable", true);

  return (
    <Stack>
      <InputField
        size={size}
        help={<TextLink>{help}</TextLink>}
        label={label}
        helpClosable={helpClosable}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        help={help}
        value={value}
        helpClosable={helpClosable}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        help={help}
        inlineLabel
        label={label}
        helpClosable={helpClosable}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        size={size}
        help={help}
        inlineLabel
        prefix={prefix}
        helpClosable={helpClosable}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={action("change")}
      />
      <InputField
        label={label}
        inlineLabel
        helpClosable={helpClosable}
        readOnly
        tags={
          <div>
            <Tag selected onRemove={action("onRemove")}>
              Brno
            </Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
            <Tag onRemove={action("onRemove")}>Praha</Tag>
          </div>
        }
        help={help}
        value={value}
        placeholder={placeholder}
      />
      <InputField
        label={label}
        readOnly
        value={value}
        helpClosable={helpClosable}
        placeholder={placeholder}
        required={required}
        help={help}
      />
      <Textarea
        helpClosable={helpClosable}
        readOnly
        label={label}
        placeholder={placeholder}
        help={help}
        value={value}
      />
      <Textarea
        helpClosable={helpClosable}
        placeholder={placeholder}
        help={help}
        value={value}
        readOnly
      />
      <Select
        label={label}
        options={objectOptions}
        value={1}
        helpClosable={helpClosable}
        help={help}
        onChange={action("onChange")}
      />
      <Select
        helpClosable={helpClosable}
        options={objectOptions}
        help={help}
        value={1}
        onChange={action("onChange")}
      />
      <InputFile
        helpClosable={helpClosable}
        label={label}
        help={help}
        onRemoveFile={action("removeFile")}
      />
      <InputFile helpClosable={helpClosable} help={help} onRemoveFile={action("removeFile")} />
      <InputGroup helpClosable={helpClosable} label={label}>
        <InputField help={help} placeholder="DD" readOnly />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" readOnly />
      </InputGroup>
      <InputGroup helpClosable={helpClosable}>
        <InputField help={help} placeholder="DD" readOnly />
        <Select options={objectOptions} value={1} placeholder="Month" />
        <InputField placeholder="YYYY" readOnly />
      </InputGroup>
    </Stack>
  );
};

Help.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const RtlError = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Something is not quite right");
  const value = text("Value", "");
  const placeholder = text("Placeholder", "Placeholder");
  const prefix = text("Prefix", "$");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const required = boolean("required", true);

  return (
    <RenderInRtl>
      <Stack>
        <InputField
          size={size}
          error={error}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          inlineLabel
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          size={size}
          error={error}
          inlineLabel
          prefix={prefix}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={action("change")}
        />
        <InputField
          label={label}
          inlineLabel
          tags={
            <>
              <Tag selected onRemove={action("onRemove")}>
                Brno
              </Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
              <Tag onRemove={action("onRemove")}>Praha</Tag>
            </>
          }
          error={error}
          value={value}
          placeholder={placeholder}
        />
        <InputField
          label={label}
          value={value}
          placeholder={placeholder}
          required={required}
          error={error}
        />
        <Textarea label={label} placeholder={placeholder} error={error} value={value} />
        <Textarea placeholder={placeholder} error={error} value={value} />
        <Select
          label={label}
          options={objectOptions}
          value={1}
          error={error}
          onChange={action("onChange")}
        />
        <Select options={objectOptions} error={error} value={1} onChange={action("onChange")} />
        <InputFile label={label} error={error} onRemoveFile={action("removeFile")} />
        <InputFile error={error} onRemoveFile={action("removeFile")} />
        <InputGroup label={label}>
          <InputField error={error} placeholder="DD" />
          <Select options={objectOptions} value={1} placeholder="Month" />
          <InputField placeholder="YYYY" />
        </InputGroup>
        <InputGroup>
          <InputField error={error} placeholder="DD" />
          <Select options={objectOptions} value={1} placeholder="Month" />
          <InputField placeholder="YYYY" />
        </InputGroup>
      </Stack>
    </RenderInRtl>
  );
};

RtlError.story = {
  name: "RTL error",

  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};

export const withModal = (): React.Node => {
  const label = text("Label", "Label");
  const error = text("Error", "Something is not quite right");
  const showMore = boolean("required", true);

  return (
    <Modal onClose={action("onClose")} fixedFooter>
      <ModalHeader title="Refund" description="Reservation number: 123456789" />
      <ModalSection>
        <Stack>
          <Card title="Cancellation" icon={<Airplane />} />
          <Text size="small" weight="bold">
            Contact information
          </Text>
          <InputField label="E-mail" placeholder="Your email" />
          <InputGroup flex={["0 0 120px", "1 1 100%"]} onChange={action("onChange")} label={label}>
            <Select
              options={[
                { value: 1, label: "+420" },
                { value: 2, label: "+421" },
              ]}
              value={1}
              prefix={<CountryFlag code="cz" />}
              error={error}
            />
            <InputField placeholder="111 222 333" />
          </InputGroup>
          {showMore && (
            <>
              <Text weight="bold" size="small">
                Options
              </Text>
              <Radio label="Option one" checked />
              <Radio label="Option two" />
              <Text size="small" type="secondary" spaceAfter="large">
                These are the most favorite. <TextLink href="#">Show more</TextLink>
              </Text>
              <Checkbox label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at mauris laoreet, eleifend nunc eu, venenatis sem. Etiam ullamcorper euismod suscipit. In a tortor ac velit elementum ultrices. Sed accumsan suscipit pulvinar." />
            </>
          )}
        </Stack>
      </ModalSection>
      <ModalFooter flex={["0 0 auto", "1 1 100%"]}>
        <Button iconLeft={<ChevronLeft />} type="secondary">
          Back
        </Button>
        <Button fullWidth>Proceed to Payment (23.98€)</Button>
      </ModalFooter>
    </Modal>
  );
};

export const AdvancedErrorExample = (): React.Node => {
  const defaultValues = {
    name: "",
    surname: "",
    nationality: "",
    gender: "",
    dd: "",
    month: "",
    year: "",
  };

  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState(defaultValues);
  const [focused, setFocused] = React.useState({});

  const validate = (value: string) => {
    return !value || value.length === 0 ? "This field is required" : "";
  };

  const handleChange = ev => {
    const { name, value } = ev.target;

    setValues(prev => ({
      ...prev,
      [name]: value,
    }));

    setFocused(prev => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    const formValidation = Object.entries(values).reduce(
      (acc, [key, value]) => {
        // $FlowFixMe: mixed
        const newError = validate(value);
        const newFocused = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            [key]: newError,
          },
          focused: {
            ...acc.focused,
            ...newFocused,
          },
        };
      },
      {
        errors: { ...errors },
        focused: { ...focused },
      },
    );

    setErrors(formValidation.errors);
    setFocused(formValidation.focused);
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;
    const error = validate(value);

    setErrors(prev => ({
      ...prev,
      [name]: focused[name] && error,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        css={css`
          max-width: 600px;
          padding: 20px 0;
        `}
      >
        <Stack flex justify="between" spaceAfter="large">
          <InputField
            required
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Given names"
            placeholder="e.g. Harry James"
          />
          <InputField
            required
            name="surname"
            value={values.surname}
            error={errors.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Surname"
            placeholder="e.g. Brown"
          />
        </Stack>
        <Stack flex justify="between" spaceAfter="large">
          <Select
            required
            name="nationality"
            label="Nationality"
            value={values.nationality}
            error={errors.nationality}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Select"
            options={[
              { value: "ru", label: "Russia" },
              { value: "cz", label: "Czech Republic" },
              { value: "sk", label: "Slovakia" },
              { value: "cr", label: "Croatia" },
            ]}
          />
          <Select
            required
            name="gender"
            label="Gender"
            value={values.gender}
            error={errors.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            options={[
              { value: "male", label: "male" },
              { value: "female", label: "female" },
            ]}
            placeholder="Select"
          />
          <InputGroup label="Date of birth">
            <InputField
              required
              name="dd"
              type="number"
              error={errors.dd}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dd}
              placeholder="DD"
            />
            <Select
              required
              name="month"
              error={errors.month}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.month}
              placeholder="Month"
              options={[
                { value: 1, label: "January" },
                { value: 2, label: "February" },
                { value: 3, label: "March" },
                { value: 4, label: "April" },
                { value: 5, label: "May" },
                { value: 6, label: "June" },
                { value: 7, label: "July" },
                { value: 8, label: "August" },
                { value: 9, label: "September" },
                { value: 10, label: "October" },
                { value: 11, label: "November" },
                { value: 12, label: "December" },
              ]}
            />
            <InputField
              value={values.year}
              name="year"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.year}
              required
              type="number"
              placeholder="YYYY"
            />
          </InputGroup>
        </Stack>
        <Button type="primary" submit>
          Continue
        </Button>
      </form>
    </>
  );
};

export const AdvancedHelpExample = (): React.Node => {
  const defaultValues = {
    name: "",
    iban: "",
    swift: "",
    bank: "",
  };

  const helpMessages = {
    name:
      "Use the full name of the account holder. It’s either you or the person receiving the funds",
    iban: "Use the international format of your account number, e.g. IBAN if you're from the EU",
    swift: "This is the code of your bank. You can search for it online or check with your bank",
    bank:
      "If your bank doesn’t accept international transfers, we’ll need the code of their correspondent bank. Otherwise, you can leave this blank.",
  };

  const [values, setValues] = React.useState(defaultValues);
  const [messages, setMessages] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState(defaultValues);
  const [focused, setFocused] = React.useState({});

  const validate = (value: string) => {
    return !value || value.length <= 2 ? "This field is required" : "";
  };

  const handleChange = ev => {
    const { name, value } = ev.target;
    const error = validate(value);

    setValues(prev => ({
      ...prev,
      [name]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [name]: focused[name] && error,
    }));

    setFocused(prev => ({
      ...prev,
      [name]: true,
    }));

    setMessages(prev => ({
      ...prev,
      [name]: helpMessages[name],
    }));
  };

  const handleSubmit = ev => {
    ev.preventDefault();

    const formValidation = Object.entries(values).reduce(
      (acc, [key, value]) => {
        // $FlowFixMe: mixed
        const newError = validate(value);
        const newFocused = { [key]: true };

        return {
          errors: {
            ...acc.errors,
            [key]: newError,
          },
          focused: {
            ...acc.focused,
            ...newFocused,
          },
        };
      },
      {
        errors: { ...errors },
        focused: { ...focused },
      },
    );

    setErrors(formValidation.errors);
    setFocused(formValidation.focused);
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;
    const error = validate(value);

    setErrors(prev => ({
      ...prev,
      [name]: focused[name] && error,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        css={css`
          max-width: 600px;
          padding: 20px 0;
        `}
      >
        <Stack flex direction="column" spaceAfter="large">
          <InputField
            name="name"
            value={values.name}
            help={messages.name}
            error={errors.name}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Account holder name"
            placeholder="e.g. Harry James"
          />
          <InputField
            name="iban"
            value={values.iban}
            error={errors.iban}
            help={messages.iban}
            onChange={handleChange}
            onBlur={handleBlur}
            label="IBAN/account number"
          />
          <InputField
            name="swift"
            value={values.swift}
            error={errors.swift}
            help={messages.swift}
            onChange={handleChange}
            onBlur={handleBlur}
            label="SWIFT/BIC code"
          />
          <InputField
            name="bank"
            value={values.bank}
            error={errors.bank}
            help={messages.bank}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Correspondent bank SWIFT/BIC code"
            placeholder="This field is optional"
          />
        </Stack>
        <Button type="primary" submit>
          Continue
        </Button>
      </form>
    </>
  );
};

withModal.story = {
  parameters: {
    info: "Some description about this type of InputField in general.",
  },
};
