import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComentarios'
})
export class FilterComentariosPipe implements PipeTransform {
  transform(comentarios: any[], pokemonId: number): any[] {
    return comentarios.filter(comentario => comentario.pokemonId === pokemonId);
  }
}

@Pipe({
  name: 'mapComentario'
})
export class MapComentarioPipe implements PipeTransform {
  transform(comentarios: any[]): string {
    if (comentarios.length > 0) {
      return comentarios[0].comentario;
    }
    return '';
  }
}
