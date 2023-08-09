package back

import (
	"fmt"
	"net/http"

	"github.com/GoogleCloudPlatform/functions-framework-go/functions"
)

func init() {
	functions.HTTP("TestDbGetList", testDbGetList)
}

func testDbGetList(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	response := fmt.Sprintf("こんにちは。あなたはGETメソッドでリクエストしています。")
	fmt.Fprint(w, response)
}
