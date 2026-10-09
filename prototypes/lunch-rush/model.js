(function(root){
  const counts={bargain:{'20,20':[6,6],'20,15':[3,16],'15,20':[16,3],'15,15':[8,8]},loyal:{'20,20':[6,6],'20,15':[5,7],'15,20':[7,5],'15,15':[6,6]}};
  function outcome(world,you,mira){if(!counts[world]||![15,20].includes(you)||![15,20].includes(mira))throw Error('Invalid game choice');const [a,b]=counts[world][`${you},${mira}`];return {world,you,mira,customers:[a,b],revenue:[a*you,b*mira],cost:[a*10,b*10],profit:[a*(you-10),b*(mira-10)]};}
  const api={outcome};if(typeof module!=='undefined')module.exports=api;root.LunchModel=api;
})(typeof window!=='undefined'?window:globalThis);
