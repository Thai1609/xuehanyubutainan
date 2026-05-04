const fs = require('fs');
const path = './src/components/Dashboard.tsx';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const startIdx = lines.findIndex(l => l.includes("{mainTab === 'daily' && ("));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes("{mainTab === 'vocab' && ("));
if (startIdx !== -1 && endIdx !== -1) {
  const code = `      {mainTab === 'word-match' && (
        <section className="mb-24">
          <WordMatchGame vocabList={allGlobalVocab} />
        </section>
      )}`;
  lines.splice(startIdx, endIdx - startIdx - 1, code);
  fs.writeFileSync(path, lines.join('\n'));
  console.log('Patched');
} else {
  console.log('Not found boundaries', startIdx, endIdx);
}
