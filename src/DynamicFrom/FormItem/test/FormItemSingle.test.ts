import FormItemSingle from '../FormItemSingle';

describe('formItemSIngle test', () => {
    test('accepetd values', () => {
        const record = new FormItemSingle({
            title: 'Inssert name',
            type: 'single',
            name: 'st_username'
        })
        record.wrapContent({
            st_username: 'Victor raton'
        })
        expect(record.getFormIten()).toEqual({
            title: 'Inssert name',
            type: 'single',
            name: 'st_username',
            initialValue: 'Victor raton'
        })
    })

    test('paylod is not refer this field', () => {
        const record = new FormItemSingle({
            title: 'Inssert name',
            type: 'single',
            name: 'st_username'
        })
        record.wrapContent({
            st_name: 'Victor raton'
        })
        expect(record.getFormIten()).toEqual({
            title: 'Inssert name',
            type: 'single',
            name: 'st_username'
        })
    })
    
    test('empty payload', () => {
        const record = new FormItemSingle({
            title: 'Inssert name',
            type: 'single',
            name: 'st_username'
        })
        record.wrapContent()
        expect(record.getFormIten()).toEqual({
            title: 'Inssert name',
            type: 'single',
            name: 'st_username'
        })
    })

    test('not have name in objext', () => {
        const record = new FormItemSingle({
            title: 'Inssert name',
            type: 'single',
        })
        record.wrapContent({
            st_name: 'Victor raton'
        })
        expect(record.getFormIten()).toEqual({
            title: 'Inssert name',
            type: 'single'
        })
    })

    test('worng type', () => {
        const record = new FormItemSingle({
            title: 'Inssert name',
            type: 'select',
            name: 'st_username',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
        expect(() => {
            record.wrapContent({
                st_username: 'Victor raton'
            })
        }).toThrow('Invalid type')
    })
})