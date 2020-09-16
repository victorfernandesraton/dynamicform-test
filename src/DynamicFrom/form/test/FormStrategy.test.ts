import FormUser from "../business/FormUser";

import * as Yup from "yup";

describe("FormSTrategy", () => {
  test("validationRule", () => {
    const formScheme = [
      {
        label: "Login",
        name: "login",
        required: true,
        minLength: 3,
        field: "single",
        type: "email",
      },
      {
        label: "Senha",
        name: "password",
        required: true,
        minLength: 6,
        field: "single",
        type: "password",
      },
    ];
    const YupValidation = Yup.object().shape({
      login: Yup.string()
        .email(`Login is not valid email`)
        .min(3, `Login possui caracteres insufucientes`)
        .required(`Login is required`),
      password: Yup.string()
        .min(6, `Senha possui caracteres insufucientes`)
        .required(`Senha is required`),
    });
    const form = new FormUser({
      formSkeleton: formScheme,
      mutation: "",
    });
    form.build()
    expect(form.validateSchema()).toStrictEqual(YupValidation);
  });
});
