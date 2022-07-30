let skills: string[] = ['Bash','Counter','Healing'];

skills.push('Recover');

console.log(skills); 


interface Character{
    nombre:string;
    hp: number;
    skills : string[];
    town?: string;
}

const character: Character = {
    nombre : 'Strider',
    hp : 100,
    skills : ['Bash','Counter','Healing']
}

console.table(character);