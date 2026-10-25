/**
 * VERTIS Viabilidade — servidor da plataforma (Google Apps Script).
 * Fica dentro da planilha de estudos. Cada versão salva vira uma linha na aba "Estudos".
 */
const ABA = 'Estudos';
const COLS = ['id_estudo','terreno','cenario','versao','salvo_em','salvo_por','produto','area_matricula','area_liquida',
              'uh','ia','to','tp','altura_m','vgv','permuta','situacao','dados_json'];

/** Abre a plataforma quando alguém acessa o link do app da Web. */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('VERTIS Viabilidade')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/** Garante que a aba de estudos exista, com cabeçalho. */
function aba_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(ABA);
  if (!sh) sh = ss.insertSheet(ABA);
  if (sh.getLastRow() === 0) {
    sh.appendRow(COLS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, COLS.length).setFontWeight('bold');
    sh.getRange('E:E').setNumberFormat('@');   // data/hora como texto ISO, sem conversão automática
  }
  return sh;
}

/** Primeira chamada da tela: quem está usando e os estudos salvos. */
function iniciar() {
  return { email: Session.getActiveUser().getEmail(), rows: listar() };
}

/** Todas as versões salvas. */
function listar() {
  const sh = aba_();
  const n = sh.getLastRow();
  if (n < 2) return [];
  return sh.getRange(2, 1, n - 1, COLS.length).getValues()
    .filter(r => r[0])
    .map(r => {
      const o = {};
      COLS.forEach((c, i) => { o[c] = r[i] instanceof Date ? r[i].toISOString() : r[i]; });
      return o;
    });
}

/** Grava uma nova versão. A trava evita que dois sócios peguem o mesmo número de versão. */
function salvar(row) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = aba_();
    const versoes = listar().filter(r => r.id_estudo === row.id_estudo).map(r => Number(r.versao) || 0);
    row.versao = (versoes.length ? Math.max.apply(null, versoes) : 0) + 1;
    row.salvo_em = new Date().toISOString();
    row.salvo_por = Session.getActiveUser().getEmail() || row.salvo_por || '';
    sh.appendRow(COLS.map(c => (row[c] === null || row[c] === undefined) ? '' : row[c]));
    return row;
  } finally {
    lock.releaseLock();
  }
}
