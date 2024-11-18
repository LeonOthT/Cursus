import React from "react";

const LiveStreams = () => {
  const liveStreams = [
    { name: "John Doe", avatar: "https://media.istockphoto.com/id/1299037952/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng.jpg?s=1024x1024&w=is&k=20&c=YsQJH1bABPEExvmSz8b-TAD8vEKa967G7KZN1cuXsFw=" },
    { name: "Jessica", avatar: "https://media.istockphoto.com/id/970441006/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-nam-%C4%91%E1%BA%A7y-m%C3%A0u-s%E1%BA%AFc-v%E1%BB%9Bi-k%C3%ADnh-m%E1%BA%B7t-tr%E1%BB%9Di-tr%C3%AAn-m%E1%BA%AFt.jpg?s=1024x1024&w=is&k=20&c=vDvyhVise4YPMIS-yWnl_NqTregyDXi-wzGdLJm1Crs=" },
    { name: "Edututs+", avatar: "https://media.istockphoto.com/id/1191084604/vi/vec-to/avatar-nam-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=1024x1024&w=is&k=20&c=QMs_4d4tVWm0nnMvBt3iSFphDPFVajJ5KaFTnMxfnAM=" },
    { name: "Joginder Singh", avatar: "https://media.istockphoto.com/id/1191084605/vi/vec-to/avatar-nam-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-h%C3%ACnh-minh-h%E1%BB%8Da-vector.jpg?s=1024x1024&w=is&k=20&c=Iz168WmG4ZWSJ_1zOYrOYVESPS3QiR_JsXcmtl-OGzQ=" },
    { name: "Zoena", avatar: "https://media.istockphoto.com/id/1020538890/vi/vec-to/d%E1%BA%A5u-hi%E1%BB%87u-vector-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-hipster-v%C3%A0-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng-kh%C3%A1i-ni%E1%BB%87m-bi%E1%BB%83u.jpg?s=1024x1024&w=is&k=20&c=ymq-EDjVNnEsz06E2rbzq2yUUulKjWhViplgHrRDKKE=" },
    { name: "Albert Dua", avatar: "https://media.istockphoto.com/id/1170110277/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=1024x1024&w=is&k=20&c=DLHtyWvn5atIOatzkYrK3_bXeBaEtg33rv2M5kCk0us=" },
    { name: "Ridhima", avatar: "https://media.istockphoto.com/id/1170110564/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=1024x1024&w=is&k=20&c=FeYQL3P0TC0-Gx1cTKQyzSJmqX48Mj9yDe5mte4oSSY=" },
    { name: "Amritpal", avatar: "https://media.istockphoto.com/id/1170110496/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=1024x1024&w=is&k=20&c=tpvn02E9yz8WK3tki8-eq6GNPPTIY7KyJH7LEx-JRbc=" },
    { name: "Jimmy", avatar: "https://media.istockphoto.com/id/1170110861/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=1024x1024&w=is&k=20&c=g-XbjeHQNi6J1afAcR0tWKOJapNRQhfJMTV9_vwlvcA=" },
    { name: "Quinton Batchelor", avatar: "https://media.istockphoto.com/id/1170110566/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=1024x1024&w=is&k=20&c=8Cw-NIxJhLAbmtakYyFwPmNkHrIv7kv_8WjpltrTIMU=" },
    { name: "Eli Natoli", avatar: "https://media.istockphoto.com/id/1169683248/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=612x612&w=0&k=20&c=nvc1CkipEPblstmM5uM9tQOvHo7EWvaHLn4VW1cgs2w=" },
    { name: "Jaysen Batchelor", avatar: "https://media.istockphoto.com/id/1169683307/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-avatar-t%C3%A0i-kho%E1%BA%A3n-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-ph%C6%B0%C6%A1ng-ti%E1%BB%87n-truy%E1%BB%81n-th%C3%B4ng-x%C3%A3-h%E1%BB%99i.jpg?s=612x612&w=0&k=20&c=2xsEmtL1gwR6xFJnRZAdeVXMcmr4DRBsXf1KYKYn4Ys=" }
  ];
  

  return (
    <div className="flex">
      {/* Left Content */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-6">All Live Streams</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {liveStreams.map((stream, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={stream.avatar}
                alt={stream.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-gray-800 font-semibold">{stream.name}</h3>
              <span className="text-red-500 text-xs mt-2">live 🔴</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-72 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-6">Live Streaming</h2>
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className="bg-pink-100 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m0 0l-2-2m2 2H9m5 2l-2-2m0 0H9"
              />
            </svg>
          </div>
          {/* Content */}
          <p className="text-gray-600 text-center mb-4">
            Set up your channel and stream live to your students
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600">
            Get Started
          </button>
          <p className="text-sm text-gray-500 text-center mt-2">
            Info: This feature is only for "Instructors".
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveStreams;
