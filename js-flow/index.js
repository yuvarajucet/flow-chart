const editor = new Drawflow(document.getElementById("drawflow"));
editor.start();
editor.reroute = true;

editor.addNode(
    "node1",
    1,
    1,
    100,
    100,
    "test",
    {},
    "<div> Node 1</div>"
);

// editor.addNode(
//     "node3",
//     1,
//     1,
//     400,
//     100,
//     "demo",
//     {},
//     "<div> Node 2</div>"
// );

function add_node(){
    let total_nodes = document.querySelectorAll('[id^="node-"]');
    var new_id  = total_nodes.length + 1;
    var new_node_id = "node" + new_id;
    
    editor.addNode(
        new_node_id,
        1, // number of input connection
        2, // number of output connection
        1, // X-axis position
        1, // Y-axis position
        new_node_id,
        {},
        "<div> Node "+new_id+" </div>"
    );
}

function exportData() {
    console.log(JSON.stringify(editor.export(), null,4))
}

function importDiagram() {
    let data = '{"drawflow":{"Home":{"data":{"1":{"id":1,"name":"node1","data":{},"class":"test","html":"<div> Node 1</div>","typenode":false,"inputs":{"input_1":{"connections":[]}},"outputs":{"output_1":{"connections":[{"node":"2","output":"input_1"},{"node":"4","output":"input_1"}]}},"pos_x":18,"pos_y":143},"2":{"id":2,"name":"node3","data":{},"class":"demo","html":"<div> Node 2</div>","typenode":false,"inputs":{"input_1":{"connections":[{"node":"1","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"3","output":"input_1"}]}},"pos_x":362,"pos_y":76},"3":{"id":3,"name":"node3","data":{},"class":"node3","html":"<div> Node 3 </div>","typenode":false,"inputs":{"input_1":{"connections":[{"node":"2","input":"output_1"}]}},"outputs":{"output_1":{"connections":[{"node":"5","output":"input_1"}]},"output_2":{"connections":[]}},"pos_x":669,"pos_y":173},"4":{"id":4,"name":"node4","data":{},"class":"node4","html":"<div> Node 4 </div>","typenode":false,"inputs":{"input_1":{"connections":[{"node":"1","input":"output_1"}]}},"outputs":{"output_1":{"connections":[]},"output_2":{"connections":[{"node":"5","output":"input_1"}]}},"pos_x":651,"pos_y":394},"5":{"id":5,"name":"node5","data":{},"class":"node5","html":"<div> Node 5 </div>","typenode":false,"inputs":{"input_1":{"connections":[{"node":"3","input":"output_1"},{"node":"4","input":"output_2"}]}},"outputs":{"output_1":{"connections":[]},"output_2":{"connections":[]}},"pos_x":1051.5,"pos_y":293}}}}}'
    editor.import(JSON.parse(data));
}