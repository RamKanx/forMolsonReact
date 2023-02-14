# forMolsonReact
Repo para todo lo que sea React, Javascript, CSS, HTML 

## Comandos importantes de git 

### git pull origin
Baja la última version del codigo de el branch que se este trabajando actualmente para tener la copia local

### git checkout -b "nombre-del-branch"
Crea un branch nuevo desde el branch actual, por ejemplo si uno esta en "main" y hace un branch nuevo, el branch sale de main. Si uno esta en branch X, el branch sale de ese branch. (Pensarlo como un árbol). [Más info aquí](https://git-scm.com/docs/git-checkout).

### git checkout - 
Nos lleva a el branch que se estaba trabajando antes

### git add .
Agrega todos los archivos que han cambiado al current branch 

### git commit -m "Mensaje que describe los cambios" 
Agrega un mensaje para los cambios, uno **no puede** empujar cambios a la nube sin un mensaje, este paso es crítico.

(uno puede hacer, `git add . && git commit -m "mensaje aqui"` (con "")  en la misma linea del terminal para agregar y ponerle un mensaje a los cambios de una vez)

