interface ScrollProperties{
    id: string;
}

export function Scroll({id} : ScrollProperties){
    document.getElementById(id)?.scrollIntoView();
}