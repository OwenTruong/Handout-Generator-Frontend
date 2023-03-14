3/4/23

- Need to figure out how html canvas works. Since our handout generator is simple, all we need to care about are simples shapes like lines and squares... only that. Users should be able to drag around these shapes in the canvas.

3/11/23

- NavBar is probably not necessary and will only confuse the user. In this application, we only have a panel on the view. Panels are stacked like sandwiches or pancakes. The top panel is the one that is being displayed. When a panel is removed, the state on the panel should not be just deleted. It should be stored until the user does the following: refresh the page, click a restart button or complete a pdf.
- Potential ideas, caching states so that when a user refreshes a page, they will be back to where they were in the process.
- I do not believe Router is necessary either if the only moving part is the panel. It is not like I plan on loading another page.

3/12/23

- Maybe I should make login an overlay instead of a panel.
