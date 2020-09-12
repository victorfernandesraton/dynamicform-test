import FormWrapSelect from '../business/FormWrap/FormWrapSelect';

describe('formWrapSelect test', () => {
    test('accepetd values', () => {
        const record = new FormWrapSelect({
            title: 'Select language',
            type: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
        record.wrapContent({
            fk_language: 2
        })
        expect(record.getFormIten()).toEqual({
            title: 'Select language',
            type: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us', default:true},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
    })

    test('payload not refer field', () => {
        const record = new FormWrapSelect({
            title: 'Select language',
            type: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
        record.wrapContent({
            id_language: 2
        })
        expect(record.getFormIten()).toEqual({
            title: 'Select language',
            type: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
    })

    test('empty payload', () => {
        const record = new FormWrapSelect({
            title: 'Select language',
            type: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
        record.wrapContent()
        expect(record.getFormIten()).toEqual({
            title: 'Select language',
            type: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
    })

    test('not have name in input object', () => {
        const record = new FormWrapSelect({
            title: 'Select language',
            type: 'select',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
        record.wrapContent({
            fk_language: 2
        })
        expect(record.getFormIten()).toEqual({
            title: 'Select language',
            type: 'select',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
    })
    
    test('worng type', () => {
        const record = new FormWrapSelect({
            title: 'Inssert name',
            type: 'input',
            name: 'st_username'
        })
        expect(() => {
            record.wrapContent({
                st_username: 'Victor raton'
            })
        }).toThrow('invalid field type')
    })
})