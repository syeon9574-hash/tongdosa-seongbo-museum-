/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curation from './components/Curation';
import Archive from './components/Archive';
import Story from './components/Story';
import Space from './components/Space';
import Boutique from './components/Boutique';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Curation />
        <Archive />
        <Story />
        <Space />
        <Boutique />
      </main>
      <Footer />
    </div>
  );
}
