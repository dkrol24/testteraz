
import blockContent from "./blockContent"
import product from "./product"
import category from "./category"

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";

import { user, account } from "next-auth-sanity/schemas";
export const schemaTypes = [blockContent,category,product, localeText,localeBlockContent,localeString,user,account,]
