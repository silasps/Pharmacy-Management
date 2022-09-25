import "./MedicineList.css";

export default function MedicineCard({
  nomeMedicamento,
  precoUnitario,
  tipo,
  doseMedicamento,
  id,
  funcao
}) {
  return (
    <div className="medicine">
      {tipo === "Medicamento Controlado" ? (
        <img
        onClick={(e) =>
            funcao(
              id,
              nomeMedicamento,
              doseMedicamento
            )}
          className="img-thumbnail"
          src="https://2.bp.blogspot.com/-vz8zwJG7nXg/WbfO4Lgtz_I/AAAAAAAARus/xnypZV8CP9U79oAtKm58eZJ2FqEHGQB2QCLcBGAs/s1600/remedio%2Bcontrolado1.jpg"
        ></img>
      ) : (
        <img
          className="img-thumbnail"
          src="https://wwyhfaiwse.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg"
        ></img>
      )}
      <p>{nomeMedicamento}</p>
      <p>{doseMedicamento}</p>
      <p className="p-price">
        <strong>R$</strong>
        <strong className="price"> {precoUnitario}</strong>
      </p>
    </div>
  );
}
