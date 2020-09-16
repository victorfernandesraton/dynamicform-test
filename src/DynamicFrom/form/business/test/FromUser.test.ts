import FormUser from "../FormUser";

describe("FormUser", () => {
  test("accepted values", () => {
    const formSkeleton = [
      { label: "Nome", name: "username", field: "single", type: "text" },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ];
    const user = { username: "Ana", gender: 2 };
    const formUser = new FormUser(
      {
        formSkeleton,
        mutation: "",
      },
      user
    );
    formUser.wrap({ field: "edit" });
    expect(formUser.getForm()).toEqual([
      {
        label: "Nome",
        name: "username",
        field: "single",
        type: "text",
        initialValue: "Ana",
      },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2, default: true },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ]);
  });

  test("empty payload", () => {
    const formSkeleton = [
      { label: "Nome", name: "username", field: "single", type: "text" },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ];
    const user = { username: "Ana", gender: 2 };
    const formUser = new FormUser(
      {
        formSkeleton,
        mutation: "",
      },
      user
    );
    formUser.wrap();
    expect(formUser.getForm()).toEqual([
      {
        label: "Nome",
        name: "username",
        field: "single",
        type: "text",
        initialValue: "Ana",
      },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2, default: true },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ]);
  });

  test("override defaultvalue", () => {
    const formSkeleton = [
      {
        label: "Nome",
        name: "username",
        field: "single",
        type: "text",
        initialValue: "username",
      },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1, default: true },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ];
    const user = { username: "Ana", gender: 2 };
    const formUser = new FormUser(
      {
        formSkeleton,
        mutation: "",
      },
      user
    );
    formUser.wrap({ field: "create" });
    expect(formUser.getForm()).toEqual([
      {
        label: "Nome",
        name: "username",
        field: "single",
        type: "text",
        initialValue: "Ana",
      },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2, default: true },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ]);
  });

  test("override entity by payload", () => {
    const formSkeleton = [
      { label: "Nome", name: "username", field: "single", type: "text" },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ];
    const user = { username: "Ana", gender: 2 };
    const formUser = new FormUser(
      {
        formSkeleton,
        mutation: "",
      },
      user
    );
    formUser.wrap({ username: "ana" });
    expect(formUser.getForm()).toEqual([
      {
        label: "Nome",
        name: "username",
        field: "single",
        initialValue: "ana",
        type: "text",
      },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1 },
          { label: "Feminino", value: 2, default: true },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ]);
  });

  test("not corresponding entity", () => {
    const formSkeleton = [
      { label: "Nome", name: "username", field: "single", type: "text" },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1, default: true },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit" },
    ];
    const user = { firstname: "Ana", gênero: 2 };
    const formUser = new FormUser(
      {
        formSkeleton,
        mutation: "",
      },
      user
    );
    formUser.wrap({ username: "ana" });
    expect(formUser.getForm()).toEqual([
      {
        label: "Nome",
        name: "username",
        field: "single",
        type: "text",
        initialValue: "ana",
      },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1, default: true },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ]);
  });

  test("mantain formSkeleton", () => {
    const formSkeleton = [
      { label: "Nome", name: "username", field: "single", type: "text" },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1, default: true },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ];
    const user = { username: "Ana", gender: 2 };
    const formUser = new FormUser(
      {
        formSkeleton,
        mutation: "",
      },
      user
    );
    formUser.wrap({ username: "Paulo" });
    expect(formUser.getFormSkeleton()).toEqual([
      { label: "Nome", name: "username", field: "single", type: "text" },
      { label: "Sobrenome", name: "lastname", field: "single", type: "text" },
      {
        label: "Gênero",
        name: "gender",
        field: "multi",
        type: "select",
        options: [
          { label: "Masculino", value: 1, default: true },
          { label: "Feminino", value: 2 },
        ],
      },
      { label: "Salvar", name: "save", type: "submit", field: "single" },
    ]);
  });
});
