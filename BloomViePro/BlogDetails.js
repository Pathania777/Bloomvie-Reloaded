import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const BlogDetails = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Blog</Text>
      </View>

      <View style={styles.blogPost}>
        <Text style={styles.title}>Baby Sleep</Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assests/baby-pic.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.info}>
          <View style={styles.authorContainer}>
            <Image
              source={require("../assests/Chat4.png")}
              style={styles.userImage}
            />
            <Text style={styles.author}>Jenny Kaa</Text>
          </View>
          <View style={styles.dateContainer}>
            <FontAwesome
              name="calendar"
              size={12}
              color="#888"
              marginLeft={2}
            />
            <Text style={styles.date}>02 December 2023</Text>
          </View>
          <View style={styles.commentsContainer}>
            <FontAwesome name="comment" size={12} color="#888" marginLeft={2} />
            <Text style={styles.comments}>40 Comments</Text>
          </View>
        </View>

        <Text style={styles.description}>
          As a new parent, few things can be as challenging (or exhausting) as
          managing your baby’s sleep. Babies have different sleep needs and
          patterns than adults, and navigating those first months can be a real
          test.
        </Text>

        <View style={styles.links}>
          <TouchableOpacity>
            <Text style={styles.link}>Understanding Baby Sleep Patterns</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Creating a Sleep Routine</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.link}>Understanding Baby Sleep Patterns</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.commentSection}>
          <View style={styles.comment}>
            <View style={styles.commentUserContainer}>
              <Image
                source={require("../assests/Chat3.png")}
                style={styles.userImage}
              />
              <Text style={styles.commentUser}>Rojer</Text>
            </View>
            <Text style={styles.commentText}>
              I love the advice about creating a sleep routine. I'm wondering if
              daycare providers should follow the same nap schedule we have at
              home?
            </Text>

            <View style={styles.commentFooter}>
              <TouchableOpacity style={styles.likeButton}>
                <FontAwesome name="thumbs-up" size={20} color="#8C50B7" />
              </TouchableOpacity>
              <Text style={styles.likes}>5k</Text>
              <Text style={styles.likesText}> Likes</Text>
              <TouchableOpacity>
                <Text style={styles.reply}>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.commentInputContainer}>
          <Image
            source={require("../assests/Chat2.png")}
            style={styles.inputImage}
          />
          <TextInput
            style={styles.commentInput}
            placeholder="Comment as Julia"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    padding: 20,
    paddingTop: StatusBar.currentHeight, // Added paddingTop here
  },
  contentContainer: {
    paddingBottom: 20, // Add some bottom padding to the content for better scrolling
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  blogPost: {
    padding: 16,
    backgroundColor: "#EDEDF1",
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#E18AB4",
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 10,
    marginBottom: 15,
    padding: 20,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 23,
    height: 23,
    borderRadius: 15,
    marginRight: 10,
  },
  author: {
    fontSize: 12,
    color: "#555",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    color: "#555",
    marginLeft: 5,
  },
  comments: {
    fontSize: 12,
    color: "#555",
    marginLeft: 5,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  links: {
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: "#8C50B7",
    marginBottom: 5,
  },
  commentSection: {
    backgroundColor: "#F4E1F0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  comment: {
    marginBottom: 10,
  },
  commentUserContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentUser: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  commentText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  commentFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  likes: {
    fontSize: 14,
    color: "#888",
    marginLeft: 5,
  },
  likesText: {
    fontSize: 14,
    color: "#888",
  },
  reply: {
    fontSize: 14,
    color: "#8C50B7",
    marginLeft: 10,
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 20,
  },
  inputImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#B272A4",
  },
  commentInput: {
    height: 40,
    borderColor: "#A8A8AA",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default BlogDetails;
