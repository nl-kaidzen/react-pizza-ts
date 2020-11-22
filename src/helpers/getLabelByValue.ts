import { VALUE_TO_LABEL_MAP } from 'constants/valueToLabel';

// This function returns a label by received value from Dictionary.
export const getLabelByValue = (value: string) => VALUE_TO_LABEL_MAP[value];
