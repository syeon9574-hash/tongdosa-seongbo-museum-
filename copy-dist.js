import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  if (fs.existsSync('html_css_js')) {
    fs.rmSync('html_css_js', { recursive: true, force: true });
  }
  if (fs.existsSync('dist')) {
    copyDir('dist', 'html_css_js');
    console.log('Successfully compiled and copied dist/ to html_css_js/ folder.');
  } else {
    console.log('No dist folder found to copy.');
  }
} catch (e) {
  console.error('Error during copying dist to html_css_js:', e);
}
