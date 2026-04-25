namespace LopesTur.Models
{
    // Classe que representa um ponto turístico
    public class PontoTuristico
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        
        // Texto com informações do ponto (limitado a 100 caracteres)
        public string Descricao { get; set; } = string.Empty; 
        
        public string Localizacao { get; set; } = string.Empty;
        public string Cidade { get; set; } = string.Empty;
        public string Estado { get; set; } = string.Empty;
        
        // Data usada para organizar os registros (mais novos primeiro)
        public DateTime DataInclusao { get; set; } = DateTime.Now;
    }
}