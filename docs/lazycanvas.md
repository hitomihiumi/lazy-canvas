# LazyCanvas

<br>

<table>
    <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Data type</th>
        <th>Required</th>
        <th>Notes<th>
    </tr>
    <tr>
        <td>createNewCanvas()</td>
        <td>Creates a new canvas for creation requires width and height to be specified</td>
        <td>number, number</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>clearCanvas()</td>
        <td>Cleans the canvas completely</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>addLayers()</td>
        <td>Adds a layers to the canvas</td>
        <td>layer</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>removeLayer()</td>
        <td>Adds a layer to the canvas</td>
        <td>layer</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>moveLayer()</td>
        <td>Moves a layer in the array to the specified position</td>
        <td>layer, number</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>modifyLayer()</td>
        <td>Modifies a layer without extracting it from the canvas structure</td>
        <td>number, string, data</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getLayer()</td>
        <td>Gets a layer by its index</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>getIndexOfLayer()</td>
        <td>Gets the index of a layer based on its schema</td>
        <td>layer</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setData()</td>
        <td>Sets the canvas data</td>
        <td>array</td>
        <td>-</td>
        <td>Use it ONLY if you're sure of what you're doing.</td>
    </tr>
    <tr>
        <td>getData()</td>
        <td>Gives you canvas data</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setName()</td>
        <td>Sets the name of the canvas</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setDescription()</td>
        <td>Sets the description of the canvas</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>setEmoji()</td>
        <td>Sets the canvas emoji</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>loadFonts()</td>
        <td>Loads custom fonts used in the canvas</td>
        <td>array</td>
        <td>-</td>
        <td>-</td>
    </tr>
    <tr>
        <td>set404Image()</td>
        <td>Sets a blanking image when the image set by the layer cannot be loaded</td>
        <td>string</td>
        <td>-</td>
        <td>Use MUST if you create layers with images. Specify the path to the image starting from the root folder of the project</td>
    </tr>
    <tr>
        <td>renderImage()</td>
        <td>Use only for rendering the final image</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
</table>

<br>