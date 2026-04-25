using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LopesTur.Data;
using LopesTur.Models;

namespace LopesTur.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // Define a rota da API
    public class PontosTuristicosController : ControllerBase
    {
        private readonly TurismoContext _context;

        // Recebe o contexto do banco para usar nas operações
        public PontosTuristicosController(TurismoContext context)
        {
            _context = context;
        }

        // Retorna a lista de pontos turísticos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PontoTuristico>>> GetPontosTuristicos()
        {
            // Busca no banco e ordena pelos mais recentes
            return await _context.PontosTuristicos
                .OrderByDescending(p => p.DataInclusao)
                .ToListAsync();
        }

        // Salva um novo ponto turístico
        [HttpPost]
        public async Task<ActionResult<PontoTuristico>> PostPontoTuristico(PontoTuristico ponto)
        {
            // Validação simples da descrição
            if (ponto.Descricao.Length > 100)
            {
                return BadRequest("A descrição não pode ultrapassar 100 caracteres.");
            }

            _context.PontosTuristicos.Add(ponto);

            // Salva os dados no banco
            await _context.SaveChangesAsync();

            return Ok(ponto);
        }

        // Exclui um ponto turístico pelo ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePontoTuristico(int id)
        {
            // Busca o ponto no banco de dados
            var ponto = await _context.PontosTuristicos.FindAsync(id);
            if (ponto == null)
            {
                return NotFound(); // Retorna 404 se não achar
            }

            // Remove e salva a alteração no banco
            _context.PontosTuristicos.Remove(ponto);
            await _context.SaveChangesAsync();

            return NoContent(); // Retorna 204 (Sucesso, sem conteúdo)
        }
    }
}