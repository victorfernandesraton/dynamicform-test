import FormWrapInput from '../business/FormWrap/FormWrapInput';

describe('formWrapInput test', () => {
    test('accepetd values', () => {
        const record = new FormWrapInput({
            title: 'Inssert name',
            type: 'text',
            name: 'st_username'
        })
        record.wrapContent({
            st_username: 'Victor raton'
        })
        expect(record.getFormIten()).toEqual({
            title: 'Inssert name',
            type: 'text',
            name: 'st_username',
            initialValue: 'Victor raton'
        })
    })
    test('paylod is not refer this field', () => {
        const record = new FormWrapInput({
            title: 'Inssert name',
            type: 'text',
            name: 'st_username'
        })
        record.wrapContent({
            st_name: 'Victor raton'
        })
        expect(record.getFormIten()).toEqual({
            title: 'Inssert name',
            type: 'text',
            name: 'st_username'
        })
    })
    test('not have name in objext', () => {
        const record = new FormWrapInput({
            title: 'Inssert name',
            type: 'text',
        })
        record.wrapContent({
            st_name: 'Victor raton'
        })
        expect(record.getFormIten()).toEqual({
            title: 'Inssert name',
            type: 'text'
        })
    })
    test('worng type', () => {
        const record = new FormWrapInput({
            title: 'Inssert name',
            type: 'select',
            name: 'st_username'
        })
        expect(() => {
            record.wrapContent({
                st_username: 'Victor raton'
            })
        }).toThrow('invalid field type')
    })
})