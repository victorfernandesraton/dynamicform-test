import { parseJsonToFormArray } from "../DynamicForm-utils";

describe("DynamicForms-utils", () => {
  describe("parseJsonToFormArray", () => {
    test("expected array", () => {
      const formJson = {
        firstname: {
          type: "text",
          field: "single",
          initialValue: "Victor",
          required: true,
          minLength: 4,
        },
        email: {
          type: "email",
          field: "single",
          initialValue: "vfbraton@gmail.com",
          required: true,
        },
      };
      expect(parseJsonToFormArray(formJson)).toEqual([
        {
          name: "firstname",
          type: "text",
          field: "single",
          initialValue: "Victor",
          required: true,
          minLength: 4,
        },
        {
          name: "email",
          type: "email",
          field: "single",
          initialValue: "vfbraton@gmail.com",
          required: true,
        },
      ]);
    });
    test("replace name", () => {
      const formJson = {
        firstname: {
          type: "text",
          name: "login",
          field: "single",
          initialValue: "Victor",
          required: true,
          minLength: 4,
        },
        email: {
          name: "usermail",
          type: "email",
          field: "single",
          initialValue: "vfbraton@gmail.com",
          required: true,
        },
      };
      expect(parseJsonToFormArray(formJson)).toEqual([
        {
          name: "login",
          type: "text",
          field: "single",
          initialValue: "Victor",
          required: true,
          minLength: 4,
        },
        {
          name: "usermail",
          type: "email",
          field: "single",
          initialValue: "vfbraton@gmail.com",
          required: true,
        },
      ]);
    });
  });
});
