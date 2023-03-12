// this사용해보기

const qkel={
    qorudtor:function(tortkd){
        document.body
        .style.backgroundColor=tortkd;
    },
    rmfwktor:function(tortkd){
        document.body
        .style.color=tortkd;
    }
}
// const fldzm={
//     rmfwktor:function(tortkd){
//         const fldzmemf=document.querySelectorAll('a')
//         for(i=0; i<fldzmemf.length; i=i+1){
//             fldzmemf[i].style.color=tortkd;
//         }
//     }
// }
const fldzm={
    rmfwktor:function(tortkd){
        let i=0;
        let fldzmemf=document.querySelectorAll('a');    
        while(i<fldzmemf.length){
            fldzmemf[i].style.color=tortkd;
            i=i+1;
        }
    }
}