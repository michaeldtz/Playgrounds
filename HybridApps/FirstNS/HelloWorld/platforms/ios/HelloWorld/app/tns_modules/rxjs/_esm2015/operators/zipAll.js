import { ZipOperator } from './zip';
export function zipAll(project) {
    return (source) => source.lift(new ZipOperator(project));
}
//# sourceMappingURL=zipAll.js.map