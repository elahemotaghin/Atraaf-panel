import IEnviroment from './Environment';

export default interface IApplication{
    id: number;
    name: string;
    description: string;
    created: string;
    updated: string;
    environments?: IEnviroment[];
}