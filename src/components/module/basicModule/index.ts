/*
 * @Author: depp.chen
 * @Date: 2022-03-22 09:35:35
 * @Description: 导入所有组件
 */
const modules = import.meta.globEager("./*/index.vue");
import {
  moduleObjConversion,
  moduleListConversion,
} from "@src/utils/moduleConversion";

import { moduleTypeEnum } from "@src/enums/moduleType";

let moduleObj: Record<string, any> = moduleObjConversion(
  modules,
  moduleTypeEnum.basic + "_"
);

// 基础模块列表
export const basicPartList = moduleListConversion(moduleObj);

// 基础模块映射
export default moduleObj;
