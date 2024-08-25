import socket
import threading

# Chatbot logic
def generate_response(user_message):
    if 'hello' in user_message.lower():
        return 'Hello! How can I assist you today?'
    elif 'bye' in user_message.lower():
        return 'Goodbye! Have a great day!'
    else:
        return 'Sorry, I did not understand that.'

# Handle client connections
def handle_client(client_socket):
    while True:
        try:
            message = client_socket.recv(1024).decode('utf-8')
            if not message:
                break
            print(f"Received: {message}")
            response = generate_response(message)
            client_socket.send(response.encode('utf-8'))
        except:
            break

    client_socket.close()

# Set up the server
def start_server(host='127.0.0.1', port=65432):
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((host, port))
    server.listen(5)
    print(f"Server started on {host}:{port}")

    while True:
        client_socket, addr = server.accept()
        print(f"Accepted connection from {addr}")
        client_handler = threading.Thread(target=handle_client, args=(client_socket,))
        client_handler.start()

if __name__ == "__main__":
    start_server()
