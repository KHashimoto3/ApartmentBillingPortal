package back

import (
	"fmt"
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
)

func init() {
	functions.HTTP("HelloFunction", helloFunction)
	functions.HTTP("HelloGetFunction", helloGetFunction)
	functions.HTTP("HelloPostFunction", helloPostFunction)
}

func helloFunction(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "こんにちは")
}

func helloGetFunction(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	response := fmt.Sprintf("こんにちは。あなたはGETメソッドでリクエストしています。")
	fmt.Fprint(w, response)
}

func helloPostFunction(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	response := fmt.Sprintf("こんにちは。あなたはPOSTメソッドでリクエストしています。")
	fmt.Fprint(w, response)
}
