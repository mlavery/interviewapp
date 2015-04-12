
<body>
<div ng-app="interview-builder">
	<h1><u> Add a Question </u></h1>
	<!-- <meteor-include src="loginButtons"></meteor-include> -->
<form>
	<p>Choose a type of Technology or enter one</p>
	<select ng-model="newQuestion.technology" required>
		<option value="Java">Java</option>
		<option value="C#">C#</option>
		<option value="Sharepoint">Sharepoint</option>
		<option value="Algorithmic">Algorithmic</option>
		<option value="Other">Other</option>
	</select>
	<input ng-model="newQuestion.newTechnology" ng-show="newQuestion.technology === 'Other'">
	<br><br>

	<p> Select a Question Complexity Level </p>
	<select ng-model="newQuestion.level" required>
		<option value="New Grad">New Grad</option>
		<option value="Junior">Junior</option>
		<option value="Intermediate">Intermediate</option>
		<option value="Advanced">Advanced</option>
		<option value="Expert">Expert</option>
	</select>	
	<br><br>
	
	<u><label>Question:</label></u><input ng-model="newQuestion.question" required>
	<br><br>

	<u><label>Answer</label></u><br>
	<textarea rows="6" cols="50" ng-model="newQuestion.answer" required></textarea>
	<br>

	<button ng-click="newQuestion.owner=$root.currentUser._id; save(newQuestion);">Add</button>
</form>	
<br>
<br>	
<h1><u> Existing Questions </u></h1>
	<ul>
		<li ng-repeat="question in questions">
			<label>Question:    </label><label> {{question.question}}</label><br>
			<label>Level:       </label><label> {{question.level}}</label><br>
			<label>Technology:  </label><label> {{question.technology}}</label><br>
			<label>Answer:  </label><br>
			<textarea rows="6" cols="50" ng-model="question.answer" readonly></textarea>
			<button ng-click="remove(question)">X</button>
		</li>
	</ul>
</div>