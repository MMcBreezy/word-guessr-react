resource "aws_s3_bucket" "b" {
    bucket = "word-guessr-tf-bucket"

}

resource "aws_s3_bucket_website_configuration" "b" {
  bucket = aws_s3_bucket.b.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}


resource "aws_s3_bucket_policy" "b_policy" {
  bucket = aws_s3_bucket.b.id

  policy = jsonencode({
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "PublicReadGetObject",
        Effect: "Allow",
        Principal: "*",
        Action: [
          "s3:GetObject"
        ],
        Resource: [
          "arn:aws:s3:::word-guessr-tf-bucket/*"
        ]
      }
    ]
  })
}
