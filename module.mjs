// @ts-check
import { module } from "@prisma/composer";
import companyProfileService from "./service.mjs";

export default module("fronendpraktikum", ({ provision }) => {
  provision(companyProfileService, { id: "companyprofile" });
});
