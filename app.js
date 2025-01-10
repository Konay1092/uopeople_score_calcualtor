 // Function to display the real-time validation messages
 function validateInput(inputId, errorId) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);

    // If the input value is greater than 100, show an error message
    if (inputElement.value > 100) {
      errorElement.innerText = "Score cannot be greater than 100!";
    } else {
      errorElement.innerText = ""; // Clear error message if valid
    }
  }

  // Event listeners for real-time input validation
  document
    .getElementById("discussion_score")
    .addEventListener("input", function () {
      validateInput("discussion_score", "discussion_error");
    });
  document
    .getElementById("assignment_score")
    .addEventListener("input", function () {
      validateInput("assignment_score", "assignment_error");
    });
  document
    .getElementById("quiz_score")
    .addEventListener("input", function () {
      validateInput("quiz_score", "quiz_error");
    });
  document
    .getElementById("final_exam_score")
    .addEventListener("input", function () {
      validateInput("final_exam_score", "final_exam_error");
    });

  // Function to calculate the final score and CGPA
  function calculateScore() {
    // Get input values
    let discussion_score = parseFloat(
      document.getElementById("discussion_score").value
    );
    let assignment_score = parseFloat(
      document.getElementById("assignment_score").value
    );
    let quiz_score = parseFloat(
      document.getElementById("quiz_score").value
    );
    let final_exam_score = parseFloat(
      document.getElementById("final_exam_score").value
    );

    // Ensure no input is greater than 100 and values are valid
    if (
      isNaN(discussion_score) ||
      isNaN(assignment_score) ||
      isNaN(quiz_score) ||
      isNaN(final_exam_score)
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    if (
      discussion_score < 0 ||
      discussion_score > 100 ||
      assignment_score < 0 ||
      assignment_score > 100 ||
      quiz_score < 0 ||
      quiz_score > 100 ||
      final_exam_score < 0 ||
      final_exam_score > 100
    ) {
      alert("Scores must be between 0 and 100.");
      return;
    }

    // Weights for each component
    let discussion_weight = 0.25;
    let assignment_weight = 0.4;
    let quiz_weight = 0.2;
    let final_exam_weight = 0.15;

    // Calculate the final score
    let final_score =
      discussion_score * discussion_weight +
      assignment_score * assignment_weight +
      quiz_score * quiz_weight +
      final_exam_score * final_exam_weight;

    // Display the final score
    document.getElementById(
      "final_score_display"
    ).innerText = `Your final score is: ${final_score.toFixed(2)}`;

    // Grade Calculation
    let grade_point = getGradePoint(final_score);
    let grade = getGrade(final_score);

    // Display the grade
    document.getElementById(
      "grade_display"
    ).innerText = `Your grade is: ${grade}`;

    // CGPA Calculation
    let cgpa = calculateCGPA(grade_point);
    document.getElementById(
      "cgpa_display"
    ).innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
  }

  function getGradePoint(score) {
    // Calculate grade point based on the score
    if (score >= 98) return 4.0; // A+
    if (score >= 93) return 4.0; // A
    if (score >= 90) return 3.67; // A-
    if (score >= 88) return 3.33; // B+
    if (score >= 83) return 3.0; // B
    if (score >= 80) return 2.67; // B-
    if (score >= 78) return 2.33; // C+
    if (score >= 73) return 2.0; // C
    if (score >= 70) return 1.67; // C-
    if (score >= 68) return 1.33; // D+
    if (score >= 63) return 1.0; // D
    return 0.0; // F
  }

  function getGrade(score) {
    // Calculate grade based on the score
    if (score >= 98) return "A+";
    if (score >= 93) return "A";
    if (score >= 90) return "A-";
    if (score >= 88) return "B+";
    if (score >= 83) return "B";
    if (score >= 80) return "B-";
    if (score >= 78) return "C+";
    if (score >= 73) return "C";
    if (score >= 70) return "C-";
    if (score >= 68) return "D+";
    if (score >= 63) return "D";
    return "F";
  }

  function calculateCGPA(grade_point) {
    // Assuming only one subject, CGPA is equal to the grade point.
    return grade_point;
  }