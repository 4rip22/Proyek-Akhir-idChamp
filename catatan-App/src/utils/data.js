// utils/data.js

const getInitialData = () => [
    {
      id: 1,
      title: "Babel",
      body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
        id: 2,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        archived: false,
        createdAt: '2022-04-14T04:27:34.572Z',
      },
      {
        id: 3,
        title:"idcamp x dicoding",
        body: "Project ini adalah project terakhir saya dalam menyelesaikan kelas React Fundamental pada dicoding.",
        archived: false,
        createdAt: '2024-10-15T04:15:25.572Z',
      },
    {
      id: 4,
      title: "Lifecycle",
      body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 5,
      title: "ESM",
      body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 6,
      title: "Module Bundler",
      body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
  ];
  
  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };
  
  export { getInitialData, showFormattedDate };
  