import FormUser from '../FormUser';

describe('FormUser', () => {
    test('accepted values', () => {
        const formSkeleton = [
            {label: "Nome", name:'username', type: 'text'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2}
            ]}
        ]
        const user = {username: "Ana", gender: 2}
        const formUser = new FormUser({
            formSkeleton,
            mutation: ''
        },user)
        formUser.wrap({field: 'edit'})
        expect(formUser.getForm()).toEqual([
            {label: "Nome", name:'username', type: 'text', initialValue: 'Ana'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2, default:true}
            ]},
            {label: 'Salvar', name:'save', type: 'submit'}
        ])
    })
    test('empty payload', () => {
        const formSkeleton = [
            {label: "Nome", name:'username', type: 'text'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2}
            ]}
        ]
        const user = {username: "Ana", gender: 2}
        const formUser = new FormUser({
            formSkeleton,
            mutation: ''
        },user)
        formUser.wrap()
        expect(formUser.getForm()).toEqual([
            {label: "Nome", name:'username', type: 'text', initialValue: 'Ana'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2, default:true}
            ]},
            {label: 'Salvar', name:'save', type: 'submit'}
        ])
    })
    
    test('override defaultvalue', () => {
        const formSkeleton = [
            {label: "Nome", name:'username', type: 'text', initialValue: 'username'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1, default: true},
                {label: 'Feminino', value:2}
            ]}
        ]
        const user = {username: "Ana", gender: 2}
        const formUser = new FormUser({
            formSkeleton,
            mutation: ''
        },user)
        formUser.wrap({field: 'create'})
        expect(formUser.getForm()).toEqual([
            {label: "Nome", name:'username', type: 'text', initialValue: 'Ana'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2, default:true}
            ]},
            {label: 'Criar', name:'save', type: 'submit'}
        ])
    })

    test('not corresponding payload', () => {
        const formSkeleton = [
            {label: "Nome", name:'username', type: 'text'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2}
            ]}
        ]
        const user = {username: "Ana", gender: 2}
        const formUser = new FormUser({
            formSkeleton,
            mutation: ''
        },user)
        formUser.wrap({firstname: 'ana'})
        expect(formUser.getForm()).toEqual([
            {label: "Nome", name:'username', type: 'text', initialValue: 'Ana'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2, default:true}
            ]},
            {label: 'Salvar', name:'save', type: 'submit'}
        ])
    })
    
    test('override entity by payload', () => {
        const formSkeleton = [
            {label: "Nome", name:'username', type: 'text'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2}
            ]}
        ]
        const user = {username: "Ana", gender: 2}
        const formUser = new FormUser({
            formSkeleton,
            mutation: ''
        },user)
        formUser.wrap({username: 'ana'})
        expect(formUser.getForm()).toEqual([
            {label: "Nome", name:'username', type: 'text', initialValue: 'ana'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1},
                {label: 'Feminino', value:2, default:true}
            ]},
            {label: 'Salvar', name:'save', type: 'submit'}
        ])
    })

    test('not corresponding entity', () => {
        const formSkeleton = [
            {label: "Nome", name:'username', type: 'text'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1, default: true},
                {label: 'Feminino', value:2}
            ]}
        ]
        const user = {firstname: "Ana", gênero: 2}
        const formUser = new FormUser({
            formSkeleton,
            mutation: ''
        },user)
        formUser.wrap({username: 'ana'})
        expect(formUser.getForm()).toEqual([
            {label: "Nome", name:'username', type: 'text', initialValue: 'ana'},
            {label: "Sobrenome", name:'lastname', type: 'text'},
            {label: "Gênero", name:'gender', type: 'select', options: [
                {label: 'Masculino', value:1, default: true},
                {label: 'Feminino', value:2}
            ]},
            {label: 'Salvar', name:'save', type: 'submit'}
        ])
    })
})