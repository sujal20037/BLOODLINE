const NotificationSidebar = ({ notifications, onClose, handleResponse }) => {
    console.log("Rendering NotificationSidebar...", notifications);
    
    return (
      <div className="fixed right-0 top-24 w-1/3 h-fit bg-white shadow-lg z-50 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-red-500">Notifications</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            ✖
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-50px)]">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="p-4 mb-4 border rounded-md shadow-md bg-gray-100"
            >
              <p className="text-gray-700">
                {notification}
              </p>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleResponse(index, "Yes")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleResponse(index, "No")}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NotificationSidebar;
  