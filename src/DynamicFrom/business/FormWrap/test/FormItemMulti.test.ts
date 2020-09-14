import FormItemMulti from '../FormItemlMuti';

describe('FormItemMulti test', () => {
    test('accepetd values', () => {
        const record = new FormItemMulti({
            title: 'Select language',
            type: 'multi',
            field: 'select',
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
            type: 'multi',
            field: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us', default:true},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
    })

    test('overwide defalt', () => {
        const record = new FormItemMulti({
            title: 'Select language',
            type: 'multi',
            field: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},    
                {value: 4, label: 'jp', default: true}
            ]
        })
        record.wrapContent({
            fk_language: 2
        })
        expect(record.getFormIten()).toEqual({
            title: 'Select language',
            type: 'multi',
            field: 'select',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us', default:true},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
    })

    test('conserve default value', () => {
        const record = new FormItemMulti({
            title: 'Select language',
            type: 'multi',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},    
                {value: 4, label: 'jp', default: true}
            ]
        })
        record.wrapContent({
            language: 2
        })
        expect(record.getFormIten()).toEqual({
            title: 'Select language',
            type: 'multi',
            name: 'fk_language',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp', default: true}
            ]
        })
    })

    test('payload not refer field', () => {
        const record = new FormItemMulti({
            title: 'Select language',
            type: 'multi',
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
            type: 'multi',
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
        const record = new FormItemMulti({
            title: 'Select language',
            type: 'multi',
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
            type: 'multi',
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
        const record = new FormItemMulti({
            title: 'Select language',
            type: 'multi',
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
            type: 'multi',
            options: [
                {value: 1, label: 'pt-br'},
                {value: 2, label: 'en-us'},
                {value: 3, label: 'es'},
                {value: 4, label: 'jp'}
            ]
        })
    })
    
    test('worng type', () => {
        const record = new FormItemMulti({
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