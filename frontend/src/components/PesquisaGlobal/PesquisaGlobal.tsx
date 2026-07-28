import "./PesquisaGlobal.css";

type Props = {

  value: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  placeholder?: string;

};

export default function PesquisaGlobal({

  value,

  onChange,

  placeholder = "Pesquisar..."

}: Props) {

  return (

    <input
      className="pesquisa-global"
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />

  );

}