const editor = new Drawflow(document.getElementById("drawflow"));
editor.start();

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

editor.addNode(
    "node3",
    1,
    1,
    400,
    100,
    "demo",
    {},
    "<div> Node 2</div>"
);

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