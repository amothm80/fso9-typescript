import { Gender } from "../types";

export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

export const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

export const isNumber = (number: string): boolean => {
  return Boolean(Number.parseInt(number));
};

export function isGender(gender:string):gender is Gender{
    return  Object.values(Gender).map((v=>v.toString())).includes(gender);
  }