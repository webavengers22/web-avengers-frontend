const blankPattern = /^\s+|\s+$/g;

export const required = (value: string | undefined) => {
  return value && (value?.replace(blankPattern, "") === "") === false
    ? ""
    : "해당 값은 필수값입니다.";
};

export const requestFormTypeRequired = (value: string | undefined) => {
  return !value === false ? "" : "요청 양식을 선택해 주세요.";
};

export const requestAssigneeRequired = (value: string | undefined) => {
  return !value === false ? "" : "승인자를 선택해 주세요.";
};

export const regexp = (value: string | undefined, regexp: string) => {
  const rule = new RegExp(regexp);
  return value && rule.test(value) ? "" : "올바른 형식이 아닙니다.";
};

export const maxLength = (value: string | undefined, max: number) => {
  return value!.length > max
    ? `입력값은 ${max} 글자 이상을 넘을 수 없습니다`
    : ``;
};

export const minLength = (value: string | undefined, min: number) => {
  return value!.length < min ? `입력값은 최소 ${min} 글자가 넘어야 합니다` : ``;
};
