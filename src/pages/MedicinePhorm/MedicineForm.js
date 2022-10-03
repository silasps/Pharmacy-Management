export default function MedicineForm({
  classData,
  label,
  id,
  value,
  setInfo,
  name,
  fill,
  required,
  tipo,
}) {
  // ===== a lógica abaixo está correta, apenas refiz para que você entenda como reaproveitar código repetido
  // if (tipo === "input") {
  //   return (
  //     <div className={classData}>
  //       <label htmlFor={label} className="form-label">
  //         {label} <span style={{ color: "red" }}>{fill}</span>
  //       </label>

  //       <input
  //         type="text"
  //         className="form-control"
  //         id={id}
  //         required={required || false}
  //         value={value}
  //         onChange={(e) => {
  //           setInfo((prev) => ({
  //             ...prev,
  //             [name]: e.target.value,
  //           }));
  //         }}
  //       />
  //     </div>
  //   );
  // } else if (tipo === "textarea") {
  //   return (
  //     <div className={classData}>
  //       <label htmlFor={label} className="form-label">
  //         {label} <span style={{ color: "red" }}>{fill}</span>
  //       </label>

  //       <textarea
  //         type="text"
  //         className="form-control"
  //         id={id}
  //         required={required || false}
  //         value={value}
  //         onChange={(e) => {
  //           setInfo((prev) => ({
  //             ...prev,
  //             [name]: e.target.value,
  //           }));
  //         }}
  //       />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className={classData}>
  //       <label htmlFor={label} className="form-label">
  //         {label} <span style={{ color: "red" }}>{fill}</span>
  //       </label>

  //       <select
  //         aria-label="Floating label select example"
  //         type="select"
  //         className="form-select"
  //         id="floatingSelect"
  //         required={required || false}
  //         value={value}
  //         onChange={(e) => {
  //           setInfo((prev) => ({
  //             ...prev,
  //             [name]: e.target.value
  //           }));
  //         }}
  //       >
  //         <option defaultValue value=''>Selecione o Tipo</option>
  //         <option>Medicamento Controlado</option>
  //         <option>Medicamento Comum</option>
  //       </select>
  //     </div>
  //   );
  // }
  return (
    <div className={classData}>
      {/* A parte da label é igual para todos eles */}
      <label htmlFor={label} className="form-label">
        {label} <span style={{ color: "red" }}>{fill}</span>
      </label>
      {tipo === "input" && (
        <input
          // para ser mais reaproveitável poderia ter enviado também o type, pois o componente preço deveria ser número, por exemplo
          type="text"
          className="form-control"
          id={id}
          required={required || false}
          value={value}
          onChange={(e) => {
            setInfo((prev) => ({
              ...prev,
              [name]: e.target.value,
            }));
          }}
        />
      )}
      {tipo === "textarea" && (
        <textarea
          type="text"
          className="form-control"
          id={id}
          required={required || false}
          value={value}
          onChange={(e) => {
            setInfo((prev) => ({
              ...prev,
              [name]: e.target.value,
            }));
          }}
        />
      )}
      {tipo === "select" && (
        <select
          aria-label="Floating label select example"
          type="select"
          className="form-select"
          id="floatingSelect"
          required={required || false}
          value={value}
          onChange={(e) => {
            setInfo((prev) => ({
              ...prev,
              [name]: e.target.value,
            }));
          }}
        >
          <option defaultValue value="">
            Selecione o Tipo
          </option>
          <option>Medicamento Controlado</option>
          <option>Medicamento Comum</option>
        </select>
      )}
    </div>
  );
}
