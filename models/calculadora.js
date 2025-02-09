function somar(p1, p2) {
   if (typeof p1 !== "number" || typeof p2 !== "number") {
      return "Erro";
   }
   return p1 + p2;
}

exports.somar = somar;
