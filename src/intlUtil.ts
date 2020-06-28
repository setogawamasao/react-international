import yaml from "js-yaml";

export const getYaml = async (
  locale: string
): Promise<Record<string, string>> => {
  const res = await fetch(`langage/${locale}.yml`);
  const text = await res.text();
  const yamlData: {} = flatten(yaml.load(text));
  return yamlData;
};

const flatten = (yaml: any): {} => {
  const flattenedObj: Record<string, string> = {};
  dive("", yaml, flattenedObj);
  return flattenedObj;
};

const dive = (previousKey: string, yaml: any, flattenedObj: any): void => {
  for (const key in yaml) {
    let connectedKey = "";
    if (previousKey === "") {
      connectedKey = key;
    } else {
      connectedKey = `${previousKey}.${key}`;
    }

    // "recursive call" or "set returnObject"
    if (typeof yaml[key] === "object") {
      dive(connectedKey, yaml[key], flattenedObj);
    } else {
      flattenedObj[connectedKey] = yaml[key];
    }
  }
};
