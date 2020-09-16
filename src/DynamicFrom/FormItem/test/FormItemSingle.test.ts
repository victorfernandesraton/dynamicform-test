import FormItemSingle from "../FormItemSingle";

describe("formItemSIngle test", () => {
  test("accepetd values", () => {
    const record = new FormItemSingle({
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
    });
    record.wrapContent({
      st_username: "Victor raton",
    });
    expect(record.getFormIten()).toEqual({
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
      initialValue: "Victor raton",
    });
  });

  test("paylod is not refer this field", () => {
    const record = new FormItemSingle({
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
    });
    record.wrapContent({
      st_name: "Victor raton",
    });
    expect(record.getFormIten()).toEqual({
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
    });
  });

  test("empty payload", () => {
    const record = new FormItemSingle({
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
    });
    record.wrapContent();
    expect(record.getFormIten()).toEqual({
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
    });
  });

  test("not have name in objext", () => {
    const record = new FormItemSingle({
      title: "Inssert name",
      field: "single",
      type: "text",
    });
    record.wrapContent({
      st_name: "Victor raton",
    });
    expect(record.getFormIten()).toEqual({
      title: "Inssert name",
      field: "single",
      type: "text",
    });
  });

  test("worng field", () => {
    const record = new FormItemSingle({
      title: "Inssert name",
      field: "select",
      type: "text",
      name: "st_username",
      options: [
        { value: 1, label: "pt-br" },
        { value: 2, label: "en-us" },
        { value: 3, label: "es" },
        { value: 4, label: "jp" },
      ],
    });
    expect(() => {
      record.wrapContent({
        st_username: "Victor raton",
      });
    }).toThrow("Invalid field");
  });
  
  test("override default value", () => {
    const formItem = {
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
    }
    const record = new FormItemSingle(formItem);
    record.wrapContent();
    record.getFormIten()
    expect(formItem).toEqual({
      title: "Inssert name",
      field: "single",
      type: "text",
      name: "st_username",
    })
  });
});
