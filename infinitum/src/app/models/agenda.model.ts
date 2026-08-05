export interface Categoria {
    
    id: string;
    nome: string;

}

export interface Noticia {

    id?: string;
    titulo: string;
    data: string;
    categoriaID: string;
    descricao: string;
    
}

export interface Usuario {

    id?: string;
    nome: string;
    email: string;
    role: 'admin' | 'user';
    senha?: string;
    
}